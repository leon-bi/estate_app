# Copyright (c) 2023, leon and contributors
# For license information, please see license.txt

# import frappe
from  __future__ import unicode_literals
from frappe.model.document import Document
import frappe

class Property(Document):
	pass
	# validate
	# def validate(self):
	# 	if (self.property_type=="Flat"):
	# 		for amenity in self.amenities:
	# 			if(amenity.amenity == "Outdoor Kitchen"):

	# 				frappe.throw((f'You are not allowed to save <b>{amenity.amenity}<b>'))
