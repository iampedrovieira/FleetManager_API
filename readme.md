## init
* npm install


## Dev
    *  Testar local com o 'npm run dev' e trabalhar e testar api sobre isso.

    * Ao criar um route, tambem é necessario adicionar no vercel.json
## Deploy
     * Branch 'main' é a de produção, vai ficar com o url 'https://cm-three.vercel.app/'

     * A cada commit em cada branch é feito um deploy que fica um 'url', diferente.


## ENDPOINTS
### USERS
    * /api/users/login ->
        * POST
        * JSON request -> {'firebaseKey':firebasekey}
        * JSON response -> {'status':false,'userid':'','companyid':''}
### Employees
    * /api/employee/info -> 
        * POST
        * JSON request -> {'firebaseKey':firebasekey}
        * JSON response -> {
    "employee_key": "dAGS0TudqXY02VpZske94Puynlt2",
    "employee_name": "Chico",
    "phone_number": "91231231",
    "employee_address": "Rua la de cima",
    "picture": null,
    "company_key": "ZVguuAgogEaoW6NKGWnNqRVUxEO2",
    "on_service": true
    }

    * /api/employee/trips -> 
        * POST
        * JSON request -> {'firebaseKey':firebasekey}
        * JSON response -> [{
        "trip_id": 1,
        "travel_distance": "320.1",
        "date": "2021-05-23",
        "license_plate": "XX-XX-XX",
        "employee_key": "dAGS0TudqXY02VpZske94Puynlt2"
    }
    ]

### Company

    * /api/company/info ->
        * POST
        * JSON request -> {'companyKey':firebasekey}
        * JSON response -> {
    "company_key": "ZVguuAgogEaoW6NKGWnNqRVUxEO2",
    "company_name": "quimtransportes"
    }

    * /api/company/vehicle ->
        * POST
        * JSON request -> {'companyKey':firebasekey}
        * JSON response -> [
    {
        "license_plate": "XX.XX.XX",
        "brand": "Mercedez-Benz",
        "model": null,
        "total_km": null,
        "avg_consumption": null,
        "isActive": null,
        "vehicle_latitude": null,
        "vehicle_longitude": null,
        "image": null,
        "vehicle_type": null,
        "company_key": "ZVguuAgogEaoW6NKGWnNqRVUxEO2",
        "fuel_type": null
    }
    ]

    * /api/company/employees
        * POST
        * JSON request ->  {'companyKey':firebasekey}
        * JSON response -> [
    {
        "employee_key": "dAGS0TudqXY02VpZske94Puynlt2",
        "employee_name": "Chico",
        "phone_number": "91231231",
        "employee_address": "Rua la de cima",
        "picture": null,
        "company_key": "ZVguuAgogEaoW6NKGWnNqRVUxEO2",
        "on_service": true
    }
    ]
### External

    * /api/external/vehicle-by-plate
        * POST
        * JSON request -> {'plate':''}
        * JSON response -> {
            'plate':plate,
            'plate_date':'',
            'brand':'',
            'model':'',
            'average_consumption':'',
            'type':'',
            'fuel_type':'',
        }

### Vehicle

    * /api/vehicle/get_info
        * POST
        * JSON request -> {'plate':''}
        * JSON response -> {
  "license_plate": "XX-XX-XX",
  "brand": "Mercedez-Benz",
  "model": null,
  "total_km": null,
  "avg_consumption": null,
  "isActive": null,
  "vehicle_latitude": null,
  "vehicle_longitude": null,
  "image": null,
  "vehicle_type": null,
  "company_key": "ZVguuAgogEaoW6NKGWnNqRVUxEO2",
  "fuel_type": null
}

    * /api/vehicle/get_trips
        * POST
        * JSON request -> {'plate':''}
        * JSON response ->[{
    "trip_id": 1,
    "travel_distance": "320.1",
    "date": "2021-05-23",
    "license_plate": "XX-XX-XX",
    "employee_key": "dAGS0TudqXY02VpZske94Puynlt2"
    }
    ]

    * /api/vehicle/get_actions
        * POST
        * JSON request -> {'plate':''}
        * JSON response -> [{
    "action_id": 2,
    "action_description": "Mudar oleo",
    "cost": "400.34",
    "company_of_action": "Mac Anico",
    "wasApproved": null,
    "date": "2021-05-23",
    "license_plate": "XX-XX-XX",
    "action_type": null
     }
    ]


    * /api/
        * POST
        * JSON request -> {'firebaseKey':firebasekey}
        * JSON response -> {'status':false,'userid':'','companyid':''}
