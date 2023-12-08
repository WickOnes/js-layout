import {createElement, createHeader, createPost} from '../../script/layout'

const page = document.querySelector('.page')

const title = createElement('h1', 'title' , "Мій блог")

const header = createHeader()

const post =createPost()



page.append(header)
page.append(title)
page.append(post)
