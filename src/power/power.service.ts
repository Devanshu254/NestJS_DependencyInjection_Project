import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
    supplyPower(watts: number) {
        console.log(`Supplying ${watts} worth of power.`);
    }
    // Now we need to take this service and get access to it inside both our cpu module and disk module. In order to get cpu and disk work correctly they need some amount of power.
}
