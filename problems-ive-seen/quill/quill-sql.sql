-- Suggested testing environment:
-- http://sqlite.online/

-- Example case create statement:

CREATE TABLE employees (
  id INTEGER NOT NULL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE tasks (
  id INTEGER NOT NULL PRIMARY KEY,
  authorId INTEGER NOT NULL REFERENCES employees (id),
  assigneeId INTEGER REFERENCES employees (id)
);

INSERT INTO employees(id, name) VALUES(1, 'Richard');
INSERT INTO employees(id, name) VALUES(2, 'Lily');

INSERT INTO tasks(id, authorId, assigneeId) VALUES(1, 1, NULL);
INSERT INTO tasks(id, authorId, assigneeId) VALUES(2, 2, 1);

-- Expected output (in any order):
-- id  author  assignee
-- ----------------------
-- 1   Richard
-- 2   Lily    Richard

-- SOLUTION:

SELECT t.id, e1.name, e2.name 
FROM tasks t 
left outer join employees e1 ON t.authorid = e1.id 
left outer join employees e2 ON t.assigneeid = e2.id