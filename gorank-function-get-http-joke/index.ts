import { AzureFunction, Context, HttpRequest } from "@azure/functions"

interface HttpResponse {
    status_code: number
    headers: { [name: string]: string }
    body: any
}

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log.info('Hello from joke function!');

    const body = {
        "text": "Vilka är mest aktiva i skogen? ... Träna!"
    }

    const res : HttpResponse = {
        status_code: 200,
        headers: {"content-type": "application/json"},
        body: body
    };

    context.res = res;

};

export default httpTrigger;