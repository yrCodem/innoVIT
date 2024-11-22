import React from "react";

const Dbms = () => {
  return (
    <div>
      <h3 className="text-[2rem] font-bold tracking-widest mb-4">
        Introduction of DBMS (Database Management System)
      </h3>
      <p className="tracking-wide ml-8 mb-8">
        A database is a collection of interrelated data that helps in the
        efficient retrieval, insertion, and deletion of data from the database
        and organizes the data in the form of tables, views, schemas, reports,
        etc. For Example, a university database organizes the data about
        students, faculty, admin staff, etc. which helps in the efficient
        retrieval, insertion, and deletion of data from it.
      </p>

      <h3 className="text-[2rem] font-bold tracking-widest mb-4">
        What is DBMS?
      </h3>
      <p className="tracking-wide ml-8 mb-8">
        A Database Management System (DBMS) is a software system that is
        designed to manage and organize data in a structured manner. It allows
        users to create, modify, and query a database, as well as manage the
        security and access controls for that database. DBMS provides an
        environment to store and retrieve data in convenient and efficient
        manner.
      </p>

      <h3 className="text-[2rem] font-bold tracking-widest mb-4">
        Key Features of DBMS
      </h3>

      <ul className="tracking-wide ml-8 mb-8">
        <li>
          <b>Data Modeling:</b> A DBMS provides tools for creating and modifying
          data models, which define the structure and relationships of the data
          in a database.
        </li>
        <li>
          <b>Data Storage and Retrieval:</b> A DBMS is responsible for storing
          and retrieving data from the database, and can provide various methods
          for searching and querying the data.
        </li>
        <li>
          <b>Concurrency Control:</b> A DBMS provides mechanisms for controlling
          concurrent access to the database, to ensure that multiple users can
          access the data without conflicting with each other.
        </li>
        <li>
          <b>Data Integrity and Security:</b> A DBMS provides tools for
          enforcing data integrity and security constraints, such as constraints
          on the values of data and access controls that restrict who can access
          the data.
        </li>
        <li>
          <b>Backup and Recovery:</b> A DBMS provides mechanisms for backing up
          and recovering the data in the event of a system failure.
        </li>
        <li>
          <b>DBMS Types:</b>
          <ul>
            <li>
              <b>RDBMS:</b> Data is organized in the form of tables and each
              table has a set of rows and columns. The data are related to each
              other through primary and foreign keys.
            </li>
            <li>
              <b>NoSQL:</b> Data is organized in the form of key-value pairs,
              documents, graphs, or column-based. These are designed to handle
              large-scale, high-performance scenarios.
            </li>
          </ul>
        </li>
      </ul>

      <h3 className="text-[2rem] font-bold tracking-widest mb-4">
        Types of DBMS
      </h3>
      <p className="tracking-wide ml-8 mb-8">
        Relational Database Management System (RDBMS): Data is organized into
        tables (relations) with rows and columns, and the relationships between
        the data are managed through primary and foreign keys. SQL (Structured
        Query Language) is used to query and manipulate the data.
      </p>
      <p className="tracking-wide ml-8 mb-8">
        NoSQL DBMS: Designed for high-performance scenarios and large-scale
        data, NoSQL databases store data in various non-relational formats such
        as key-value pairs, documents, graphs, or columns.
      </p>
      <p className="tracking-wide ml-8 mb-8">
        Object-Oriented DBMS (OODBMS): Stores data as objects, similar to those
        used in object-oriented programming, allowing for complex data
        representations and relationships
      </p>

      <h3 className="text-[2rem] font-bold tracking-widest mb-4">
        Data Definition Language (DDL)
      </h3>
      <p className="tracking-wide ml-8 mb-8">
        DDL is the short name for Data Definition Language, which deals with
        database schemas and descriptions, of how the data should reside in the
        database.
      </p>

      <ul className="tracking-wide ml-8 mb-8">
        <li>
          <b>CREATE:</b> To create a database and its objects like (table,
          index, views, stored procedures, functions, and triggers).
          <br />
        </li>
        <li>
          <b>ALTER:</b> Alters the structure of the existing database.
          <br />
        </li>
        <li>
          <b>DROP:</b> Deletes objects from the database.
          <br />
        </li>
        <li>
          <b>TRUNCATE:</b> Removes all records from a table, including all
          spaces allocated for the records.
          <br />
        </li>
        <li>
          <b>COMMENT:</b> Adds comments to the data dictionary.
          <br />
        </li>
        <li>
          <b>RENAME:</b> Renames an object.
          <br />
        </li>
      </ul>

      <h3 className="text-[2rem] font-bold tracking-widest mb-4"></h3>
      <p className="tracking-wide ml-8 mb-8"></p>

      <h3 className="text-[2rem] font-bold tracking-widest mb-4"></h3>
      <p className="tracking-wide ml-8 mb-8"></p>
    </div>
  );
};

export default Dbms;
