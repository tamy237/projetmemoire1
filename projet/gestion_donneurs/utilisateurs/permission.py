from rest_framework import permissions

class IsPersonnelMedical(permissions.BasePermission):
    """
    Permission pour restreindre l'accès au personnel médical uniquement.
    """

    def has_permission(self, request, view):
        return request.user and request.user.is_authenticated and request.user.role == 'personnel'
