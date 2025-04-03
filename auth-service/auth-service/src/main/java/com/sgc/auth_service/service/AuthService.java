package com.sgc.auth_service.service;

import com.sgc.auth_service.dto.AuthRequest;
import com.sgc.auth_service.dto.AuthResponse;
import com.sgc.auth_service.entity.User;
import com.sgc.auth_service.repository.UserRepository;
import com.sgc.auth_service.security.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtil jwtUtil;

    public String register(AuthRequest request) {
        var user = User.builder()
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(User.Role.INVESTIGADOR) // puedes cambiar el rol por defecto si quieres
                .build();

        userRepository.save(user);
        return "Usuario registrado exitosamente";
    }

    public AuthResponse login(AuthRequest request) {
        var user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Contraseña inválida");
        }

        String token = jwtUtil.generateToken(user.getEmail(), user.getRole().name());
        return new AuthResponse(token);
    }
}
