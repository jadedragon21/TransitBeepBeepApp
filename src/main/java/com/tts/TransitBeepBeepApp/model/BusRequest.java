package com.tts.TransitBeepBeepApp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BusRequest {

    public String address;
    public String city;
}
