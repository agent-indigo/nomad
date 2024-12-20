from django.db import models
from app.settings import AUTO_APPROVE_USER_IMPORTS
class Import(models.Model):
  account_id = models.ForeignKey(
    'Account',
    on_delete=models.DO_NOTHING
  )
  type = models.TextField
  approved = models.BooleanField(default=AUTO_APPROVE_USER_IMPORTS)
  overwrite = models.BooleanField(default=True)
  data_file_name = models.TextField(blank=True)
  data_content_type = models.TextField(blank=True)
  data_file_size = models.DecimalField(blank=True)
  data_updated_at = models.DateTimeField(blank=True)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)