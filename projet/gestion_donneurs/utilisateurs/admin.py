from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import Utilisateur

class UtilisateurAdmin(UserAdmin):
    model = Utilisateur
    list_display = ('email', 'nom', 'prenom', 'role', 'is_active', 'is_staff')
    list_filter = ('role', 'is_active')
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Infos personnelles', {'fields': ('nom', 'prenom', 'telephone', 'role')}),
        ('Permissions', {'fields': ('is_staff', 'is_active', 'is_superuser', 'groups', 'user_permissions')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'nom', 'prenom', 'telephone', 'role', 'password1', 'password2', 'is_active', 'is_staff')}
        ),
    )
    search_fields = ('email',)
    ordering = ('email',)

admin.site.register(Utilisateur, UtilisateurAdmin)
