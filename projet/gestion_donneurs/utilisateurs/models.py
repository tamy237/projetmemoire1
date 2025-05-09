from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.db import models

class UtilisateurManager(BaseUserManager):
    def create_user(self, email, nom, prenom, telephone, role, password=None):
        if not email:
            raise ValueError("L'utilisateur doit avoir une adresse email.")
        email = self.normalize_email(email)
        user = self.model(
            email=email,
            nom=nom,
            prenom=prenom,
            telephone=telephone,
            role=role,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, nom, prenom, telephone, password):
        user = self.create_user(email, nom, prenom, telephone, role='personnel', password=password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)
        return user


class Utilisateur(AbstractBaseUser, PermissionsMixin):
    ROLE_CHOICES = (
        ('donneur', 'Donneur'),
        ('personnel', 'Personnel médical'),
    )

    email = models.EmailField(unique=True)
    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    telephone = models.CharField(max_length=20)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UtilisateurManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nom', 'prenom', 'telephone', 'role']

    def __str__(self):
        return f"{self.email} ({self.role})"
