from django.urls.conf import path
from chat import consumers

websocket_urlpatterns = [
    path('ws/<room_name>/', consumers.ChatConsumer),
]
