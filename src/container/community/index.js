import {createElement, createHeader, createBreadcrumbs,createInformation} from '../../script/layout'

const title = createElement('h1', 'title' , "Коммьюніті")

const header = createHeader()

const breadcrumbs = createBreadcrumbs()

const page = document.querySelector('.root')

const information = createInformation()

page.append(header)
page.append(title)
page.append(breadcrumbs)
page.append(information)