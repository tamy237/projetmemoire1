from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Utilisateur
from django.core.mail import send_mail
from twilio.rest import Client

@api_view(['POST'])
def envoyer_appel(request):
    data = request.data
    groupe = data['groupeSanguin']

    # Recherche de tous les donneurs correspondant
    donneurs = Utilisateur.objects.filter(role='donneur', groupe_sanguin=groupe)

    twilio_sid = 'TON_SID'
    twilio_token = 'TON_TOKEN'
    twilio_number = 'TON_NUMERO_TWILIO'
    client = Client(twilio_sid, twilio_token)

    for d in donneurs:
        sms = f"🩸 Appel au don ! {data['cts']} vous invite à {data['lieu']} le {data['date']} à {data['heure']} pour les groupes {groupe}."
        
        # Email
        send_mail(
            subject="📣 Appel au don de sang",
            message=sms,
            from_email="banque@donsang.org",
            recipient_list=[d.email],
        )

        # SMS
        client.messages.create(
            body=sms,
            from_=twilio_number,
            to=d.telephone
        )

    return Response({"message": "Appels envoyés avec succès."})
