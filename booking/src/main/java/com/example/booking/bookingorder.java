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
	private String startStation;
	private String endStation;
	private String name;
	private String age;
	private String gender;
	private String credit;
	private String address;
	private String berth;	
	private String Date;
	private String email;
	private String phone;


	
	public bookingorder() {
		
	}



	public bookingorder(String id, String startStation, String endStation, String name, String age, String gender,
			String credit, String address, String berth, String date, String email, String phone) {
		super();
		this.id = id;
		this.startStation = startStation;
		this.endStation = endStation;
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.address = address;
		this.berth = berth;
		Date = date;
		this.email = email;
		this.phone = phone;
	}



	public String getId() {
		return id;
	}



	public void setId(String id) {
		this.id = id;
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



	public String getDate() {
		return Date;
	}



	public void setDate(String date) {
		Date = date;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getPhone() {
		return phone;
	}



	public void setPhone(String phone) {
		this.phone = phone;
	}



	@Override
	public String toString() {
		return "bookingorder [id=" + id + ", startStation=" + startStation + ", endStation=" + endStation + ", name="
				+ name + ", age=" + age + ", gender=" + gender + ", address=" + address
				+ ", berth=" + berth + ", Date=" + Date + ", email=" + email + ", phone=" + phone + "]";
	}



}
