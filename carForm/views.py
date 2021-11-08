from django.shortcuts import render
from hellosign_sdk import HSClient

# Create your views here.


def home(request, completeName, email, logo, make, model, version, plate, vin, year, kms):
    client = HSClient(
        api_key='b06489bfd18927d5cd99f173d1a428647f0669214b101c8fc18a72f2bd4f0df0')
    temp = client.get_template_list()
    pa = logo.replace("@", "/")
    context = {
        'temp': temp,
        'completeName': completeName,
        'email': email,
        'logo': pa,
        'make': make,
        'model': model,
        'version': version,
        'plate': plate,
        'vin': vin,
        'year': year,
        'kms': kms
    }

    if request.method == 'POST':
        dNumber = request.POST['documentNumber']
        paymentForm = request.POST['paymentForm']
        id = request.POST['templateID']
        cName = request.POST['completeName']
        emails = request.POST['email']
        make = request.POST['make']
        model = request.POST['model']
        version = request.POST['version']
        plate = request.POST['plate']
        vin = request.POST['vin']
        year = request.POST['year']
        kms = request.POST['kms']
        selectedTemp = []
        for t in temp:
            if t.template_id == id:
                selectedTemp = t
        email = emails.split(',')
        for e in email:
            try:
                client.send_signature_request_with_template(
                    test_mode=True,
                    template_id=selectedTemp.template_id,
                    subject='Purchase Order',
                    message='Glad we could come to an agreement.',
                    signers=[{'role_name': 'Customer', 'name': cName,
                              'email_address': e}],
                    custom_fields=[{'tName': selectedTemp.title,
                                    'cName': cName, 'dNumber': dNumber, 'email': e, 'paymentForm': paymentForm, 'make': make, 'model': model, 'version': version, 'plate': plate, 'vin': vin, 'year': year, 'kms': kms}]
                )
            except:
                return render(request, 'error.html')
        return render(request, 'success.html')
    return render(request, 'main.html', context)


def chk(request):
    # client = HSClient(
    #     api_key='<0ccd450ba0c522d3388026558dcc8ef26e7c7d28546993d5343647905b9e53c0>')

    # print(client.get_account_info())
    return render(request, 'main.html')
