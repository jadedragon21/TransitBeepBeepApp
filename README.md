# TransitBeepBeepApp
 CatBusTransit app built on Marta and Google APIs


Sign up for a google api key:

Add in a  application.properties file in the resources file.

Add in these lines to the aforementioned application.properties file.

google_api_key = (Put your api key here xxx)

transit_url = http://developer.itsmarta.com/BRDRestService/RestBusRealTimeService/GetAllBus

geocoding_url = https://maps.googleapis.com/maps/api/geocode/json?address=

distance_url = https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&

Run application and type the below http address into your browser and voila!

http://localhost:8080/buses to get to the cat bus map.
Yes they do keep bouncing....

CatBus Page:
![index.html](https://github.com/jadedragon21/TransitBeepBeepApp/blob/main/src/main/resources/static/Screenshot_2021-03-08%20Nearby%20Cat%20Buses.png)
