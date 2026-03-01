test("Hamster initializes with correct default values", () => {
    const hamster = new Hamster(1, "Nibbles", 10, "song_path");

    expect(hamster.getId()).toBe(1);
    expect(hamster.getName()).toBe("Nibbles");
    expect(hamster.getBaseRevenue()).toBe(10);
    expect(hamster.getLevel()).toBe(0);
    expect(hamster.getExp()).toBe(0);
    expect(hamster.getMultiplier()).toBe(1);
});

test("gainExp increases experience correctly", () => {
    const hamster = new Hamster(1, "Nibbles", 10);

    hamster.gainExp(15);

    expect(hamster.getExp()).toBe(15);
});


test("Hamster levels up when exp exceeds threshold", () => {
    const hamster = new Hamster(1, "Nibbles", 10);

    hamster.gainExp(30); // above 24

    expect(hamster.getLevel()).toBe(1);
});

test("water gives 15 exp", () => {
    const hamster = new Hamster(1, "Nibbles", 10);

    hamster.water();

    expect(hamster.getExp()).toBe(15);
});


test("water does nothing if hamster is busy", () => {
    const hamster = new Hamster(1, "Nibbles", 10);

    hamster.setState(hamster.State.SLEEPING);

    hamster.water();

    expect(hamster.getExp()).toBe(0);
});


test("eat gives 50 exp", () => {
    const hamster = new Hamster(1, "Nibbles", 10);

    hamster.eat();

    expect(hamster.getExp()).toBe(50);
});

test("sleep gives 5 exp", () => {
    const hamster = new Hamster(1, "Nibbles", 10);

    hamster.sleep();

    expect(hamster.getExp()).toBe(5);
});


test("pet gives 15 exp", () => {
    const hamster = new Hamster(1, "Nibbles", 10);

    hamster.pet();

    expect(hamster.getExp()).toBe(15);
});


test("petting 5 times eventually agitates hamster", () => {
    const hamster = new Hamster(1, "Nibbles", 10);

    for (let i = 0; i < 5; i++) {
        hamster.pet();
    }

    expect(hamster.petCounter).toBe(5);
});


test("isBusy returns true if sleeping", () => {
    const hamster = new Hamster(1, "Nibbles", 10);

    hamster.setState(hamster.State.SLEEPING);

    expect(hamster.isBusy()).toBe(true);
});


test("isBusy returns false if normal", () => {
    const hamster = new Hamster(1, "Nibbles", 10);

    hamster.setState(hamster.State.NORMAL);

    expect(hamster.isBusy()).toBe(false);
});


test("returnMessage returns correct state message", () => {
    const hamster = new Hamster(1, "Nibbles", 10);

    hamster.setState(hamster.State.HAPPY);

    expect(hamster.returnMessage()).toBe("is feeling happy!");
});