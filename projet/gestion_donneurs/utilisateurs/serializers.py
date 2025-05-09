from rest_framework import serializers
from .models import Utilisateur
from django.contrib.auth import authenticate

class UtilisateurSerializer(serializers.ModelSerializer):
    class Meta:
        model = Utilisateur
        fields = ['id', 'email', 'nom', 'prenom', 'telephone', 'role']

class EnregistrementSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = Utilisateur
        fields = ['email', 'nom', 'prenom', 'telephone', 'role', 'password']

    def create(self, validated_data):
        user = Utilisateur.objects.create_user(**validated_data)
        return user

class ConnexionSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        user = authenticate(email=data['email'], password=data['password'])
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Identifiants invalides.")
