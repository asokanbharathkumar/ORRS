package com.example.demo;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="train")
public class Train {
	 @Id
	 public int train_id;
	 public String train_name;
	 public String from;
	 public String to;
	 public int fare;
	 public int gen;
	 public String running;
	 public String time;
	 
	 public Train() {
		 
	 }

	public Train(int train_id, String train_name, String from, String to, int fare, int gen, String running,
			String time) {
		super();
		this.train_id = train_id;
		this.train_name = train_name;
		this.from = from;
		this.to = to;
		this.fare = fare;
		this.gen = gen;
		this.running = running;
		this.time = time;
	}

	public int getTrain_id() {
		return train_id;
	}

	public void setTrain_id(int train_id) {
		this.train_id = train_id;
	}

	public String getTrain_name() {
		return train_name;
	}

	public void setTrain_name(String train_name) {
		this.train_name = train_name;
	}

	public String getFrom() {
		return from;
	}

	public void setFrom(String from) {
		this.from = from;
	}

	public String getTo() {
		return to;
	}

	public void setTo(String to) {
		this.to = to;
	}

	public int getFare() {
		return fare;
	}

	public void setFare(int fare) {
		this.fare = fare;
	}

	public int getGen() {
		return gen;
	}

	public void setGen(int gen) {
		this.gen = gen;
	}

	public String getRunning() {
		return running;
	}

	public void setRunning(String running) {
		this.running = running;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	@Override
	public String toString() {
		return "Train [train_id=" + train_id + ", train_name=" + train_name + ", from=" + from + ", to=" + to
				+ ", fare=" + fare + ", gen=" + gen + ", running=" + running + ", time=" + time + "]";
	}

	
	
}
