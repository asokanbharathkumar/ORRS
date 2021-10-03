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
	private String bankname;
	private String Date;
	private String email;
	private String phone;
	private String cvv;
	private String month;
	private String year;

	
	public bookingorder() {
		
	}


	public bookingorder(String id, String startStation, String endStation, String name, String age, String gender,
			String credit, String address, String berth, String bankname, String date, String email, String phone,
			String cvv, String month, String year) {
		super();
		this.id = id;
		this.startStation = startStation;
		this.endStation = endStation;
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.credit = credit;
		this.address = address;
		this.berth = berth;
		this.bankname = bankname;
		Date = date;
		this.email = email;
		this.phone = phone;
		this.cvv = cvv;
		this.month = month;
		this.year = year;
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


	public String getCvv() {
		return cvv;
	}


	public void setCvv(String cvv) {
		this.cvv = cvv;
	}


	public String getMonth() {
		return month;
	}


	public void setMonth(String month) {
		this.month = month;
	}


	public String getYear() {
		return year;
	}


	public void setYear(String year) {
		this.year = year;
	}


	@Override
	public String toString() {
		return "bookingorder [id=" + id + ", startStation=" + startStation + ", endStation=" + endStation + ", name="
				+ name + ", age=" + age + ", gender=" + gender + ", credit=" + credit + ", address=" + address
				+ ", berth=" + berth + ", bankname=" + bankname + ", Date=" + Date + ", email=" + email + ", phone="
				+ phone + ", cvv=" + cvv + ", month=" + month + ", year=" + year + "]";
	}



}
