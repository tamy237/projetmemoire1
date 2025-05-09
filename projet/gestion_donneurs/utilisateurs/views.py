from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Utilisateur
from .serializers import EnregistrementSerializer, ConnexionSerializer, UtilisateurSerializer

class EnregistrementView(generics.CreateAPIView):
    serializer_class = EnregistrementSerializer
    permission_classes = [permissions.AllowAny]

class ConnexionView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        serializer = ConnexionSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        refresh = RefreshToken.for_user(user)
        return Response({
            'user': UtilisateurSerializer(user).data,
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        })
