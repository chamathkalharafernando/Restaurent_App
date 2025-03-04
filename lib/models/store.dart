class Store {
  int? storeid;
  String? storename;
  String? storeaddress;
  double? storelatitude;
  double? storelongitude;
  String? storephone;
  String? storeemail;
  String? storepassword;

  Store(
      {this.storeid,
      this.storename,
      this.storeaddress,
      this.storelatitude,
      this.storelongitude,
      this.storephone,
      this.storeemail,
      this.storepassword});

  Store.fromJson(Map<String, dynamic> json) {
    storeid = json['store_id'];
    storename = json['store_name'];
    storeaddress = json['store_address'];
    storelatitude = json['store_latitude'];
    storelongitude = json['store_longitude'];
    storephone = json['store_phone'];
    storeemail = json['store_email'];
    storepassword = json['store_password'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = Map<String, dynamic>();
    storeid = data['store_id'];
    storename = data['store_name'];
    storeaddress = data['store_address'];
    storelatitude = data['store_latitude'];
    storelongitude = data['store_longitude'];
    storephone = data['store_phone'];
    storeemail = data['store_email'];
    storepassword = data['store_password'];
    return data;
  }
}
