from channels.generic.websocket import AsyncWebsocketConsumer
import json
from chat.models import Message
from chat.serializers import MessageSerializer


class ChatConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.room_name = self.scope["url_route"]["kwargs"]["room_name"]
        self.room_group_name = "chat_{}".format(self.room_name)
        # Join room group
        await self.channel_layer.group_add(self.room_group_name, self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(self.room_group_name, self.channel_name)

    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        text = text_data_json["message"]
        message = Message(
            text=text, room_name=self.scope["url_route"]["kwargs"]["room_name"]
        )
        message.save()

        await self.channel_layer.group_send(
            self.room_group_name,
            {"type": "chat_message", "message": MessageSerializer(message).data},
        )

    # Recieve messege from room group
    async def chat_message(self, event):
        message = event["message"]

        # Send message to WebSocket
        await self.send(text_data=json.dumps({"message": message}))
