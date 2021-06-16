import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FormComponent } from './form/form.component'
import { PollComponent } from './poll/poll.component'
import { ResponseComponent } from './response/response.component'


const routes : Routes = [
    {path:"", component: FormComponent},
    {path:"poll/:id", component: PollComponent},
    {path:"response", component: ResponseComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
export const routingComponents = [FormComponent,PollComponent]