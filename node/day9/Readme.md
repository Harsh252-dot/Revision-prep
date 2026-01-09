1. What is database scaling? Explain vertical vs horizontal scaling.
Database scaling is the process of increasing a database’s capacity to handle more data, users, or requests.
 Vertical Scaling (Scale Up)
Increase resources of a single server (CPU, RAM, disk).
Example: Upgrade from 8GB RAM → 32GB RAM.
Pros
Simple to implement
No application changes
Cons
Hardware limits
Single point of failure
Expensive
 Horizontal Scaling (Scale Out)
Add more database servers and distribute data.
Example: Sharding across multiple nodes.
Pros
High availability
Fault tolerance
Practically unlimited scaling
Cons
Complex architecture






2. What is database replication? Explain master-slave replication.
Database replication means copying data from one database server to others to improve availability and read performance.
 Master-Slave Replication
Master: Handles all writes (INSERT, UPDATE, DELETE)
Slave(s): Replicate data and handle read queries
Flow
Client → Write → Master → Replication → Slaves
Client → Read → Slaves
Benefits
Read scalability
Backup & failover
Reduced load on master
Drawback
Replication lag (eventual consistency)




3. What is database sharding? How does it work?
Sharding is a type of horizontal scaling where data is split across multiple databases (shards).
How it works
Each shard stores a subset of data
Shard key decides where data goes
Example
UserID % 3
Shard 1 → Users 1–1000
Shard 2 → Users 1001–2000
Shard 3 → Users 2001–3000
Each shard is an independent database.




4. What are the challenges of sharding?
Complex queries (joins across shards)
Rebalancing shards
 Hot shards (uneven data distribution)
 Cross-shard transactions
Increased operational complexity






5. What is database partitioning? How does it differ from sharding?

Partitioning splits a table into smaller parts within the same database.

Difference
Partitioning	                 Sharding
Same DB instance	           DB instances
Easier to manage	              Complex
Improves query performance	  Improves scalability
Limited by single machine	  Horizontally scalable





6. What is a connection pool? Why is it important?
A connection pool is a cache of reusable database connections.
Why important?
Creating DB connections is expensive
Pool reuses connections instead of opening new ones
Benefits
Faster Performance
Limits DB overload
Better resource utilization





7. What are N+1 queries? How do you solve this problem?
 N+1 Query Problem

Occurs when:
1 query fetches a list (N rows)
Then N additional queries fetch related data.
Example
SELECT * FROM users;
SELECT * FROM orders WHERE user_id = 1;
SELECT * FROM orders WHERE user_id = 2;

Solutions
JOINs
Eager loading
Batch queries
Caching
ORM optimization (populate/include)




8. What is caching? Explain caching strategies.
Caching stores frequently accessed data in fast storage (Redis, Memory).
 Cache-Aside (Lazy Loading)
App checks cache first
On miss → fetch DB → update cache
Most common
Write-Through
Write to cache + DB simultaneously
Pros
Strong consistency
Cons
Slower writes
 Write-Back (Write-Behind)
Write to cache first
DB updated asynchronously
Pros
Fast writes
Cons
Risk of data loss













9. What is the CAP theorem?

CAP theorem states that a distributed system can guarantee only two of the three:
Consistency – all nodes see same data
Availability – every request gets a response
Partition Tolerance – system works despite network failures
Examples
CP: MongoDB, HBase
AP: Cassandra, DynamoDB
CA: Traditional SQL (single node)








10. What are database transactions? What is MVCC?
Database Transactions
A transaction is a group of operations executed as a single unit.
Follows ACID:
Atomicity
Consistency
Isolation
Durability