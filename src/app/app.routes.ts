import { Routes } from '@angular/router';
import { ValidationComponent } from './main-components/validation/validation.component';
import { SystemComponent } from './system-components/system/system.component';
import { ManageInventoryComponent } from './system-components/manage-inventory/manage-inventory.component';
import { SalesHistoryComponent } from './system-components/sales-history/sales-history.component';
import { SalesAnalysisComponent } from './system-components/sales-analysis/sales-analysis.component';
import { SupplierDataComponent } from './system-components/supplier-data/supplier-data.component';
export const routes: Routes = [
    {path: "home", component: ValidationComponent},
    {path: "system", component: SystemComponent,
        children:[
            {path: "", redirectTo: "manage-inventory", pathMatch: 'full'},
            {path: "manage-inventory", component: ManageInventoryComponent},
            {path: "sales-history", component: SalesHistoryComponent},
            {path: "sales-analysis", component: SalesAnalysisComponent},
            {path: "supplier-data", component: SupplierDataComponent}
        ]
    },
    {path: "", redirectTo: "/home", pathMatch: 'full'}
];