import { sum } from "../sum";


test("Sum function should calculate the sum of two number",() => {

    sum(3,4);


    // Asseration
    expect(sum(3,4)).toBe(7);
})