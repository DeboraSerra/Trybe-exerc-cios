import { Pizza } from "./exercise3";

interface Comum extends Pizza {
  flavor: 'Calabresa' | 'Frango' | 'Pepperoni'
}

interface Veggie extends Pizza {
  flavor: 'Marguerita' | 'Palmito' | 'Cogumelo'
}

interface Sweet extends Pizza {
  flavor: 'Nutela' | 'Goiabada com queijo' | 'Marshmallow',
  slices: 4
}

const frango: Comum = {
  flavor: "Frango",
  slices: 6,
}

const marguerita: Veggie = {
  flavor: "Marguerita",
  slices: 6,
}

const desert: Sweet = {
  flavor: "Goiabada com queijo",
  slices: 4
}
