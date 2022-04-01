from django.urls import path

from . import views

urlpatterns = [
    path('', views.note, name='note'),
    path('createNote', views.createNote, name='createNote'),
    path('deleteNote/<str:pk>', views.deleteNote, name='deleteNote'),
]