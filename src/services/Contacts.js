import axios from 'axios'

export default class Contacts {
  constructor () {
    this.contacts = []
  }

  getAll () {
    return this.contacts
  }

  add (contact) {
    return this.contacts.push(contact)
  }

  remove (id) {
  }

  edit (contact) {
  }

  get (id) {
  }
}

export const contacts = new Contacts()
