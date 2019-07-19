from chat.views import MessagesListView
from django.urls.conf import path

urlpatterns = [
    path('api/messages/<room_name>/', MessagesListView.as_view()),
]