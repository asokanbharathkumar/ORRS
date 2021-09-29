package com.example.booking;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
@Document(collection = "Orders")
public class bookingorder {
	
	@Id
	private String id;
	private String quantity;
	private String startStation;
	private String endStation;
	private String name;
	private String age;
	private String gender;
	private String credit;
	private String address;
	private String berth;
	private String bankname;

	
	
	public bookingorder() {
		
	}



	public bookingorder(String id, String quantity, String startStation, String endStation, String name, String age,
			String gender, String credit, String address, String berth, String bankname) {
		super();
		this.id = id;
		this.quantity = quantity;
		this.startStation = startStation;
		this.endStation = endStation;
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.credit = credit;
		this.address = address;
		this.berth = berth;
		this.bankname = bankname;
	}



	public String getId() {
		return id;
	}



	public void setId(String id) {
		this.id = id;
	}



	public String getQuantity() {
		return quantity;
	}



	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}



	public String getStartStation() {
		return startStation;
	}



	public void setStartStation(String startStation) {
		this.startStation = startStation;
	}



	public String getEndStation() {
		return endStation;
	}



	public void setEndStation(String endStation) {
		this.endStation = endStation;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public String getAge() {
		return age;
	}



	public void setAge(String age) {
		this.age = age;
	}



	public String getGender() {
		return gender;
	}



	public void setGender(String gender) {
		this.gender = gender;
	}



	public String getCredit() {
		return credit;
	}



	public void setCredit(String credit) {
		this.credit = credit;
	}



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	public String getBerth() {
		return berth;
	}



	public void setBerth(String berth) {
		this.berth = berth;
	}



	public String getBankname() {
		return bankname;
	}



	public void setBankname(String bankname) {
		this.bankname = bankname;
	}



	@Override
	public String toString() {
		return "bookingorder [id=" + id + ", quantity=" + quantity + ", startStation=" + startStation + ", endStation="
				+ endStation + ", name=" + name + ", age=" + age + ", gender=" + gender + ", credit=" + credit
				+ ", address=" + address + ", berth=" + berth + ", bankname=" + bankname + "]";
	}


}
