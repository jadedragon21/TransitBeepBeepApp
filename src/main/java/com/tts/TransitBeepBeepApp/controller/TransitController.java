package com.tts.TransitBeepBeepApp.controller;

import com.tts.TransitBeepBeepApp.model.Bus;
import com.tts.TransitBeepBeepApp.model.BusRequest;
import com.tts.TransitBeepBeepApp.service.TransitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class TransitController {

    @Autowired
    private TransitService apiService;

    @GetMapping("/buses")
    public String getBusesPage(Model model){
        model.addAttribute("request", new BusRequest());
        return "index";
    }

    @PostMapping("/buses")
    public String getNearbyBuses(BusRequest request, Model model) {
        List<Bus> buses = apiService.getNearbyBuses(request);
        model.addAttribute("buses", buses);
        model.addAttribute("request", request);
        return "index";
    }

//    @PostMapping("/buses")
//    public String getNearbyBuses(BusRequest request, Model model) {
//        List<Bus> buses = apiService.getNearbyBuses(request);
////        Location userLocation = apiService.getCoordinates(request.address + " " + request.city);
////        model.addAttribute("location", userLocation);
//        model.addAttribute("buses", buses);
//        model.addAttribute("request", request);
//        //new
////        model.addAttribute(request.address);
//        return "index";
//    }

}
