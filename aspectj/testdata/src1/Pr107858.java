class Foo {
  Foo field;
  void test() {}
}

public aspect Bug {
  void around() : call(void Foo.test()) {
    Foo foo = new Foo().field;
    proceed(foo); // caught at compile time
    proceed(new Foo().field); // crashes
  }
}