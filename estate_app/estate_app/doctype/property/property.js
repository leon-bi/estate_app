// Copyright (c) 2023, leon and contributors
// For license information, please see license.txt

frappe.ui.form.on('Property', {
	setup: frm => {

	},
	refresh: function (frm) {
		// frm.add_custom_button('Say Hi', () => {
		// 	frappe.prompt('Address', ({ value }) => {
		// 		if (value) { 
		// 			frm.set_value('address',value);
		// 			frm.refresh_field('address');
		// 			frappe.msgprint(__(`Addrss field updated with ${value};`))
		// 		}
		// 	})
		// 	// frappe.msgprint(frm.doc.email);
		// });

	}
});
//AMENITY CHILD TABLE
frappe.ui.form.on('Property Amenity Detail', {
	setup: function (	){
		//check for amenity duplicates
		frm.check_amenities_duplicate = function(frm, amenity){
			frm.doc.amenity.forEach(item => {
			console.log(item.amenity);
			});
		}
	},
	amenity: function (frm, cdt, cdn) {
		let row = locals[cdt][cdn];
		console.log(row);
		frm.check_amenities_duplicate(frm, row.amenity);
	},

});
