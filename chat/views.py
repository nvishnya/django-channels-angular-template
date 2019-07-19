from chat.serializers import MessageSerializer
from rest_framework import generics
from chat.models import Message


class MessagesListView(generics.ListAPIView):
    serializer_class = MessageSerializer

    def get_queryset(self):
        return Message.objects.filter(room_name=self.kwargs["room_name"])
