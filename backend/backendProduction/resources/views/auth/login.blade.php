<!DOCTYPE html>
<html lang="es" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar Sesión | Panel Administrativo Dygytel</title>
    <link rel="icon" type="image/png" href="{{ asset('icono.png') }}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
    <script>
        // Check stored theme before paint to prevent flash
        (function() {
            try {
                const stored = localStorage.getItem('dygytel-theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const isDark = stored ? stored === 'dark' : prefersDark;
                if (!isDark) {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                }
            } catch (e) {}
        })();
    </script>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            transition: background-color 0.25s ease, border-color 0.25s ease, color 0.25s ease;
        }

        :root {
            --bg-color: #030712;
            --text-main: #f8fafc;
            --text-muted: #94a3b8;
            --text-sub: #64748b;
            --card-bg: rgba(15, 23, 42, 0.75);
            --card-border: rgba(255, 255, 255, 0.12);
            --card-shadow: 0 0 50px rgba(6, 141, 187, 0.16), 0 25px 50px -12px rgba(0, 0, 0, 0.7);
            --input-bg: rgba(255, 255, 255, 0.03);
            --input-border: rgba(255, 255, 255, 0.1);
            --input-text: #ffffff;
            --input-placeholder: #64748b;
            --req-bg: rgba(15, 23, 42, 0.6);
            --req-border: rgba(255, 255, 255, 0.08);
            --footer-border: rgba(255, 255, 255, 0.08);
            --btn-toggle-bg: rgba(255, 255, 255, 0.06);
            --btn-toggle-border: rgba(255, 255, 255, 0.12);
            --btn-toggle-color: #cbd5e1;
            --grid-opacity: 0.3;
        }

        html.light {
            --bg-color: #f8fafc;
            --text-main: #0f172a;
            --text-muted: #64748b;
            --text-sub: #94a3b8;
            --card-bg: rgba(255, 255, 255, 0.88);
            --card-border: rgba(226, 232, 240, 0.9);
            --card-shadow: 0 20px 45px -10px rgba(6, 141, 187, 0.15), 0 4px 15px rgba(0, 0, 0, 0.05);
            --input-bg: #f1f5f9;
            --input-border: #cbd5e1;
            --input-text: #0f172a;
            --input-placeholder: #94a3b8;
            --req-bg: #f1f5f9;
            --req-border: #e2e8f0;
            --footer-border: #e2e8f0;
            --btn-toggle-bg: #e2e8f0;
            --btn-toggle-border: #cbd5e1;
            --btn-toggle-color: #334155;
            --grid-opacity: 0.15;
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-main);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow-x: hidden;
            position: relative;
        }

        /* Ambient Glow Halos */
        .ambient-halos {
            position: fixed;
            inset: 0;
            pointer-events: none;
            overflow: hidden;
            z-index: -10;
        }
        .halo-1 {
            position: absolute;
            top: -160px;
            left: -160px;
            width: 500px;
            height: 500px;
            border-radius: 50%;
            background: rgba(15, 212, 212, 0.18);
            filter: blur(140px);
        }
        .halo-2 {
            position: absolute;
            top: 35%;
            right: -160px;
            width: 600px;
            height: 600px;
            border-radius: 50%;
            background: rgba(6, 141, 187, 0.18);
            filter: blur(160px);
        }
        .halo-3 {
            position: absolute;
            bottom: 0;
            left: 30%;
            width: 450px;
            height: 450px;
            border-radius: 50%;
            background: rgba(15, 212, 212, 0.12);
            filter: blur(120px);
        }

        /* Grid Backdrop */
        .grid-backdrop {
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: -5;
            opacity: var(--grid-opacity);
            background-image: 
                linear-gradient(to right, rgba(6, 141, 187, 0.15) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(6, 141, 187, 0.15) 1px, transparent 1px);
            background-size: 56px 56px;
            mask-image: radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%);
            -webkit-mask-image: radial-gradient(ellipse at 50% 50%, black 40%, transparent 80%);
        }

        main {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2rem 1.5rem;
            position: relative;
            z-index: 1;
        }

        .card-container {
            width: 100%;
            max-width: 460px;
        }

        .glass-card {
            background: var(--card-bg);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border: 1px solid var(--card-border);
            border-radius: 1.75rem;
            padding: 2.25rem 2rem;
            box-shadow: var(--card-shadow);
            position: relative;
        }

        .logo-container {
            display: flex;
            justify-content: center;
            margin-bottom: 1.25rem;
        }
        .logo-container img {
            height: 46px;
            width: auto;
            object-fit: contain;
        }

        .header-section {
            text-align: center;
            margin-bottom: 1.5rem;
        }
        .tag-badge {
            display: inline-block;
            font-family: 'JetBrains Mono', monospace;
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            color: #068dbb;
            margin-bottom: 0.4rem;
        }
        html.dark .tag-badge {
            color: #0fd4d4;
        }
        h1 {
            font-size: 1.4rem;
            font-weight: 800;
            color: var(--text-main);
            letter-spacing: -0.025em;
            margin-bottom: 0.4rem;
        }
        p.subtitle {
            font-size: 0.8125rem;
            color: var(--text-muted);
            line-height: 1.45;
        }

        .form-group {
            margin-bottom: 1.1rem;
        }
        label {
            display: block;
            font-family: 'JetBrains Mono', monospace;
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--text-muted);
            margin-bottom: 0.45rem;
        }

        .input-wrapper {
            display: flex;
            align-items: center;
            background: var(--input-bg);
            border: 1px solid var(--input-border);
            border-radius: 0.75rem;
            padding: 0.7rem 0.9rem;
            transition: all 0.2s ease;
        }
        .input-wrapper:focus-within {
            border-color: #068dbb;
            box-shadow: 0 0 0 2px rgba(6, 141, 187, 0.2);
        }
        .input-wrapper svg.icon-prefix {
            width: 16px;
            height: 16px;
            margin-right: 0.65rem;
            color: #068dbb;
            flex-shrink: 0;
        }
        .input-wrapper input {
            width: 100%;
            background: transparent;
            border: none;
            outline: none;
            color: var(--input-text);
            font-size: 0.85rem;
            font-weight: 500;
        }
        .input-wrapper input::placeholder {
            color: var(--input-placeholder);
        }
        .btn-toggle-pw {
            background: transparent;
            border: none;
            color: var(--text-muted);
            font-size: 0.75rem;
            font-weight: 500;
            cursor: pointer;
            padding-left: 0.5rem;
            transition: color 0.2s;
        }
        .btn-toggle-pw:hover {
            color: var(--text-main);
        }

        .error-message {
            color: #ef4444;
            font-size: 0.75rem;
            margin-top: 0.4rem;
            font-weight: 500;
        }

        .options-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0.25rem 0 1rem;
            font-size: 0.75rem;
        }
        .remember-label {
            display: flex;
            align-items: center;
            gap: 0.4rem;
            cursor: pointer;
            color: var(--text-muted);
            font-family: 'Inter', sans-serif;
            font-size: 0.775rem;
            font-weight: 500;
        }
        .remember-label input[type="checkbox"] {
            accent-color: #068dbb;
            cursor: pointer;
        }
        .forgot-link {
            color: #068dbb;
            text-decoration: none;
            font-weight: 500;
            font-size: 0.775rem;
            transition: color 0.2s;
        }
        .forgot-link:hover {
            color: #0fd4d4;
            text-decoration: underline;
        }

        button.btn-submit {
            width: 100%;
            background: linear-gradient(135deg, #068dbb 0%, #0fd4d4 100%);
            color: #ffffff;
            border: none;
            border-radius: 9999px;
            padding: 0.85rem;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            cursor: pointer;
            box-shadow: 0 0 25px rgba(6, 141, 187, 0.35);
            transition: all 0.2s ease;
        }
        button.btn-submit:hover {
            filter: brightness(1.1);
            transform: scale(1.01);
            box-shadow: 0 0 35px rgba(15, 212, 212, 0.5);
        }
        button.btn-submit:active {
            transform: scale(0.98);
        }

        .card-footer {
            margin-top: 1.75rem;
            padding-top: 1.25rem;
            border-top: 1px solid var(--footer-border);
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .theme-toggle-btn {
            background: var(--btn-toggle-bg);
            border: 1px solid var(--btn-toggle-border);
            color: var(--btn-toggle-color);
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .theme-toggle-btn:hover {
            color: #068dbb;
            border-color: #068dbb;
            transform: scale(1.05);
        }
        .theme-toggle-btn svg {
            width: 16px;
            height: 16px;
        }

        .card-footer a {
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: var(--text-muted);
            text-decoration: none;
            transition: color 0.2s;
        }
        .card-footer a:hover {
            color: #068dbb;
        }
        html.dark .card-footer a:hover {
            color: #0fd4d4;
        }

        .status-alert {
            background: rgba(16, 185, 129, 0.12);
            border: 1px solid rgba(16, 185, 129, 0.3);
            color: #10b981;
            font-size: 0.8rem;
            padding: 0.75rem 1rem;
            border-radius: 0.75rem;
            margin-bottom: 1.25rem;
            font-weight: 500;
            text-align: center;
        }
    </style>
</head>
<body>
    <!-- Ambient Halos -->
    <div class="ambient-halos" aria-hidden="true">
        <div class="halo-1"></div>
        <div class="halo-2"></div>
        <div class="halo-3"></div>
    </div>

    <!-- Grid backdrop -->
    <div class="grid-backdrop" aria-hidden="true"></div>

    <main>
        <div class="card-container">
            <div class="glass-card">
                <div class="logo-container">
                    <img src="{{ asset('Logo2.png') }}" alt="Dygytel Logo">
                </div>

                <div class="header-section">
                    <span class="tag-badge">Acceso a la Consola</span>
                    <p class="subtitle">Ingresa tus credenciales para administrar la plataforma Dygytel.</p>
                </div>

                @if (session('status'))
                    <div class="status-alert">
                        {{ session('status') }}
                    </div>
                @endif

                <form action="{{ route('login') }}" method="POST" id="loginForm">
                    @csrf

                    <div class="form-group">
                        <label for="email">Email</label>
                        <div class="input-wrapper">
                            <svg class="icon-prefix" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                <circle cx="12" cy="7" r="4" />
                            </svg>
                            <input type="email" id="email" name="email" value="{{ old('email') }}" required autofocus placeholder="admin@dygytel.com">
                        </div>
                        @error('email')
                            <div class="error-message">{{ $message }}</div>
                        @enderror
                    </div>

                    <div class="form-group">
                        <label for="password">Contraseña</label>
                        <div class="input-wrapper">
                            <svg class="icon-prefix" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                            <input type="password" id="password" name="password" required placeholder="••••••••••••">
                            <button type="button" class="btn-toggle-pw" onclick="togglePassword('password', this)">Mostrar</button>
                        </div>
                        @error('password')
                            <div class="error-message">{{ $message }}</div>
                        @enderror
                    </div>

                    <div class="options-row">
                        <label class="remember-label">
                            <input type="checkbox" name="remember" value="1" {{ old('remember') ? 'checked' : '' }}>
                            <span>Recordar este equipo</span>
                        </label>
                        <a href="{{ route('password.request') }}" class="forgot-link">¿Olvidaste la clave?</a>
                    </div>

                    <button type="submit" class="btn-submit">Continuar →</button>
                </form>

                <div class="card-footer">
                    <button type="button" class="theme-toggle-btn" id="themeToggleBtn" onclick="toggleTheme()" aria-label="Cambiar tema">
                        <!-- Sun Icon (shown in dark mode) -->
                        <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="4" />
                            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                        </svg>
                        <!-- Moon Icon (shown in light mode) -->
                        <svg class="icon-moon" style="display: none;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                        </svg>
                    </button>
                    <a href="http://localhost:8080">← Volver al Sitio</a>
                </div>
            </div>
        </div>
    </main>

    <script>
        function updateThemeIcons() {
            const isDark = document.documentElement.classList.contains('dark');
            const sunIcon = document.querySelector('.icon-sun');
            const moonIcon = document.querySelector('.icon-moon');
            if (sunIcon && moonIcon) {
                sunIcon.style.display = isDark ? 'block' : 'none';
                moonIcon.style.display = isDark ? 'none' : 'block';
            }
        }

        function toggleTheme() {
            const isDark = document.documentElement.classList.contains('dark');
            const nextTheme = isDark ? 'light' : 'dark';
            document.documentElement.classList.toggle('dark', nextTheme === 'dark');
            document.documentElement.classList.toggle('light', nextTheme === 'light');
            try {
                localStorage.setItem('dygytel-theme', nextTheme);
            } catch(e) {}
            updateThemeIcons();
        }

        // Initialize theme icons
        document.addEventListener('DOMContentLoaded', updateThemeIcons);

        function togglePassword(inputId, btn) {
            const input = document.getElementById(inputId);
            if (input.type === 'password') {
                input.type = 'text';
                btn.textContent = 'Ocultar';
            } else {
                input.type = 'password';
                btn.textContent = 'Mostrar';
            }
        }
    </script>
</body>
</html>
