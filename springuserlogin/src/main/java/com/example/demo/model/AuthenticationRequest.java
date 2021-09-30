package com.example.demo.model;

public class AuthenticationRequest {

	private String username;
	private String password;
	private String conpassword;
	private String name;
	private String dob;
	private String sex;
	private String emailid;
	private String phone;
	private String address;
	
	
	public AuthenticationRequest() {
		
	}


	public String getUsername() {
		return username;
	}


	public AuthenticationRequest(String username, String password, String conpassword, String name, String dob,
			String sex, String emailid, String phone, String address) {
		super();
		this.username = username;
		this.password = password;
		this.conpassword = conpassword;
		this.name = name;
		this.dob = dob;
		this.sex = sex;
		this.emailid = emailid;
		this.phone = phone;
		this.address = address;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getConpassword() {
		return conpassword;
	}


	public void setConpassword(String conpassword) {
		this.conpassword = conpassword;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getDob() {
		return dob;
	}


	public void setDob(String dob) {
		this.dob = dob;
	}


	public String getSex() {
		return sex;
	}


	public void setSex(String sex) {
		this.sex = sex;
	}


	public String getEmailid() {
		return emailid;
	}


	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}


	public String getPhone() {
		return phone;
	}


	public void setPhone(String phone) {
		this.phone = phone;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	@Override
	public String toString() {
		return "AuthenticationRequest [username=" + username + ", password=" + password + ", conpassword=" + conpassword
				+ ", name=" + name + ", dob=" + dob + ", sex=" + sex + ", emailid=" + emailid + ", phone=" + phone
				+ ", address=" + address + "]";
	}

	
}
