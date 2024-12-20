from django.db import models
class AdminActionLog(models.Model):
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING,
    blank=True
  )
  target_type = models.TextField(
    db_index=True,
    blank=True
  )
  target_id = models.TextField(
    db_index=True,
    blank=True
  )
  action = models.TextField
  recorded_changes = models.TextField
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)