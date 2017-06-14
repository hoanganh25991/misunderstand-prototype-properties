When a new function to an obj, through Object.create, the copied-obj from the origin also has this new added function

This is prototype, but it's not.

![object-create](https://github.com/hoanganh25991/misunderstand-prototype-properties/raw/master/img/object-create.png)

	c1 can sayHello,
	c1 can see anything added to c,
	JUST BCS Object.create both copy `properties` & `prototype`,
	Things share from c to c1 is just PROPERTIES,

__What considered as PROTOTYPE is come from Coder__

![Coder-prototype](https://github.com/hoanganh25991/misunderstand-prototype-properties/raw/master/img/prototype-2017-06-14_123429.png)
