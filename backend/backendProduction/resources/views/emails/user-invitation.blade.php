<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Invitación a la Plataforma</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: #f8fafc;
            color: #1e293b;
            margin: 0;
            padding: 24px;
            line-height: 1.5;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
            border: 1px solid #e2e8f0;
        }
        .header {
            background-color: #041019;
            background-image: linear-gradient(135deg, #041019 0%, #082133 100%);
            padding: 32px 24px;
            text-align: center;
            border-bottom: 3px solid #068dbb;
        }
        .header img {
            max-height: 48px;
            width: auto;
            margin-bottom: 12px;
            display: inline-block;
        }
        .header h1 {
            color: #ffffff;
            font-size: 20px;
            font-weight: 700;
            margin: 0;
            letter-spacing: -0.02em;
        }
        .content {
            padding: 32px 28px;
        }
        .badge {
            display: inline-block;
            background-color: rgba(6, 141, 187, 0.1);
            color: #068dbb;
            font-weight: 700;
            font-size: 11px;
            padding: 4px 10px;
            border-radius: 9999px;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 16px;
        }
        .greeting {
            font-size: 18px;
            font-weight: 700;
            color: #0f172a;
            margin-bottom: 12px;
        }
        .text {
            font-size: 14px;
            color: #475569;
            margin-bottom: 16px;
            line-height: 1.6;
        }
        .button-wrapper {
            text-align: center;
            margin: 32px 0;
        }
        .button {
            display: inline-block;
            background: linear-gradient(135deg, #068dbb 0%, #0fd4d4 100%);
            color: #ffffff !important;
            padding: 14px 36px;
            border-radius: 9999px;
            font-weight: 700;
            font-size: 14px;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            box-shadow: 0 4px 14px 0 rgba(6, 141, 187, 0.39);
        }
        .security-box {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-left: 4px solid #068dbb;
            border-radius: 8px;
            padding: 14px 18px;
            font-size: 13px;
            color: #64748b;
            margin-top: 24px;
            line-height: 1.5;
        }
        .fallback-link {
            font-size: 12px;
            color: #94a3b8;
            word-break: break-all;
            margin-top: 24px;
            padding-top: 20px;
            border-top: 1px solid #f1f5f9;
        }
        .fallback-link a {
            color: #068dbb;
            text-decoration: none;
        }
        .footer {
            background-color: #f1f5f9;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #94a3b8;
            border-top: 1px solid #e2e8f0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            @php
                $logoPath = public_path('Logo2.png');
            @endphp
            @if(file_exists($logoPath) && isset($message))
                <img src="{{ $message->embed($logoPath) }}" alt="Dygytel Telecomunicaciones">
            @elseif(file_exists($logoPath))
                <img src="data:image/png;base64,{{ base64_encode(file_get_contents($logoPath)) }}" alt="Dygytel Telecomunicaciones">
            @endif
            <h1>Panel Administrativo</h1>
        </div>

        <div class="content">
            <span class="badge">Nuevo Acceso</span>

            <div class="greeting">¡Hola, {{ $user->name }}!</div>

            <div class="text">
                Has sido invitado a formar parte del <strong>Panel Administrativo Dygytel</strong> como <strong>{{ ucfirst($user->role ?? 'Colaborador') }}</strong>.
            </div>

            <div class="text">
                Para completar la activación de tu cuenta y crear tu contraseña de acceso, por favor haz clic en el siguiente botón:
            </div>

            <div class="button-wrapper">
                <a href="{{ $url }}" class="button" target="_blank">
                    Asignar mi Contraseña
                </a>
            </div>

            <div class="security-box">
                🛡️ <strong>Información de Seguridad:</strong><br>
                Este enlace de invitación vencerá en <strong>48 horas</strong>. Si no esperabas esta invitación, puedes ignorar este mensaje de forma segura.
            </div>

            <div class="fallback-link">
                Si tienes problemas con el botón, copia y pega la siguiente URL en tu navegador web:<br>
                <a href="{{ $url }}">{{ $url }}</a>
            </div>
        </div>

        <div class="footer">
            Dygytel Telecomunicaciones © {{ date('Y') }}. Todos los derechos reservados.
        </div>
    </div>
</body>
</html>
