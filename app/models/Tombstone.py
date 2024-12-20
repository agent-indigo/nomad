from django.db import models
class Tombstone(models.Model):
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  uri = models.TextField(db_index=True)
  by_moderator = models.BooleanField(
    blank=True,
    default=False
  )
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)