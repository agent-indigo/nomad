from django.db import models
class Notification(models.Model):
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING
  )
  from_account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING
  )
  activity_id = models.TextField(unique=True)
  activity_type = models.TextField(unique=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)