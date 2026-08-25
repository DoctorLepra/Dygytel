<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuevo Mensaje de Contacto</title>
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
        .field-group {
            margin-bottom: 20px;
            padding-bottom: 16px;
            border-bottom: 1px solid #f1f5f9;
        }
        .field-label {
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            color: #64748b;
            font-weight: 700;
            margin-bottom: 4px;
        }
        .field-value {
            font-size: 15px;
            color: #0f172a;
            font-weight: 500;
        }
        .field-value a {
            color: #068dbb;
            text-decoration: none;
        }
        .message-box {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 16px 20px;
            font-size: 14px;
            color: #334155;
            white-space: pre-wrap;
            margin-top: 8px;
        }
        .button {
            display: inline-block;
            background-color: #068dbb;
            color: #ffffff !important;
            padding: 12px 28px;
            border-radius: 9999px;
            font-weight: 700;
            font-size: 13px;
            text-decoration: none;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            margin-top: 24px;
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
                <img src="{{ $message->embed($logoPath) }}" alt="Dygytel Telecomunicaciones" style="max-height: 48px; width: auto; margin-bottom: 12px; display: inline-block;">
            @elseif(file_exists($logoPath))
                <img src="data:image/png;base64,{{ base64_encode(file_get_contents($logoPath)) }}" alt="Dygytel Telecomunicaciones" style="max-height: 48px; width: auto; margin-bottom: 12px; display: inline-block;">
            @endif
            <h1>Nuevo Mensaje de Contacto</h1>
        </div>

        <div class="content">
            @if(!empty($data['request_type']))
                <span class="badge">{{ $data['request_type'] }}</span>
            @endif

            <div class="field-group">
                <div class="field-label">Nombre del Cliente / Remitente</div>
                <div class="field-value">{{ $data['name'] ?? '—' }}</div>
            </div>

            <div class="field-group">
                <div class="field-label">Correo Electrónico</div>
                <div class="field-value">
                    <a href="mailto:{{ $data['email'] }}">{{ $data['email'] ?? '—' }}</a>
                </div>
            </div>

            <div class="field-group">
                <div class="field-label">Teléfono / WhatsApp</div>
                <div class="field-value">
                    <a href="tel:{{ $data['phone'] }}">{{ $data['phone'] ?? '—' }}</a>
                </div>
            </div>

            @if(!empty($data['company']))
                <div class="field-group">
                    <div class="field-label">Empresa / Organización</div>
                    <div class="field-value">{{ $data['company'] }}</div>
                </div>
            @endif

            @if(!empty($data['origin']))
                <div class="field-group">
                    <div class="field-label">Origen de la Solicitud</div>
                    <div class="field-value">{{ $data['origin'] }}</div>
                </div>
            @endif

            <div class="field-group" style="border-bottom: none;">
                <div class="field-label">Mensaje / Detalle del Proyecto</div>
                <div class="message-box">{{ $data['message'] ?? '—' }}</div>
            </div>

            <div style="text-align: center;">
                <a href="mailto:{{ $data['email'] }}?subject=Re:%20Contacto%20Dygytel" class="button">
                    Responder al Cliente
                </a>
            </div>
        </div>

        <div class="footer">
            Mensaje recibido a través de dygytel.com el {{ date('d/m/Y H:i') }} (IP: {{ $data['ip'] ?? '—' }}).
        </div>
    </div>
</body>
</html>
