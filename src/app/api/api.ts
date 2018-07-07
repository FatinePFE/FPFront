export * from './accountController.service';
import { AccountControllerService } from './accountController.service';
export * from './basicErrorController.service';
import { BasicErrorControllerService } from './basicErrorController.service';
export * from './cityController.service';
import { CityControllerService } from './cityController.service';
export * from './proposalController.service';
import { ProposalControllerService } from './proposalController.service';
export * from './shopController.service';
import { ShopControllerService } from './shopController.service';
export const APIS = [AccountControllerService, BasicErrorControllerService, CityControllerService, ProposalControllerService, ShopControllerService];
