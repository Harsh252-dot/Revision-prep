1️. What is a database? What are the types of databases?
A database is an organized collection of data that allows efficient storage, retrieval, update, and deletion of data.
Types of databases:
Relational (SQL) → MySQL, PostgreSQL, Oracle
NoSQL
Document → MongoDB
Key-Value → Redis
Column-Family → Cassandra
Graph → Neo4j
In-memory → Redis
Time-series → InfluxDB
Distributed → CockroachDB





2️. Difference between SQL and NoSQL databases
Feature	                   SQL	                                  NoSQL
Data model	          Tables (rows & columns)	           Documents / Key-Value / Graph
Schema	                Fixed schema	                        Flexible schema
Scalability	              Vertical	                             Horizontal
Transactions	           ACID 	                           BASE (mostly)
Query language          	SQL                              No standard query language







3️. When would you choose SQL vs NoSQL?
Choose SQL when:
Data is structured
Strong consistency needed
Complex joins required
Financial systems
Choose NoSQL when:
Schema changes frequently
Large-scale data
High read/write throughput
Real-time applications









4️. What is ACID? Explain each property.
ACID ensures reliable transactions.
 Atomicity
Transaction is all or nothing.
 Consistency
Database moves from one valid state to another.
 Isolation
Concurrent transactions don’t interfere.
 Durability
Committed data is permanent.









5️. What is BASE in NoSQL databases?
BASE focuses on availability and scalability.
Basically Available → System always responds
Soft state → Data may change over time
Eventually consistent → Consistency achieved later







6️. What is database normalization? Explain 1NF, 2NF, 3NF.
Normalization reduces data redundancy.
 1NF
Atomic values
No repeating groups
 2NF
In 1NF
No partial dependency
 3NF
In 2NF
No transitive dependency







7️. What is denormalization? When would you denormalize?
Denormalization is adding redundancy for performance.
Use when:
Read-heavy systems
Avoid expensive joins
Performance is critical
Trade-off:
Faster reads
Slower writes
Data duplication