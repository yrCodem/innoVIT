import React from "react";

const OS = () => {
  return (
    <div>
      <h3 className="text-[2rem] font-bold tracking-widest mb-4">
        Operating System
      </h3>
      <p className="tracking-wide ml-8 mb-8">
        An Operating System(OS) is software that manages and handles the
        hardware and software resources of a computer system. It provides
        interaction between users of computers and computer hardware. An
        operating system is responsible for managing and controlling all the
        activities and sharing of computer resources. An operating system is a
        low-level Software that includes all the basic functions like processor
        management, memory management, Error detection, etc. <br /> <br /> This
        Operating System tutorial will cover all the basic to advance operating
        system concepts like System Structure, CPU Scheduling, Deadlock, file
        and disk management, and many more.
      </p>

      <h3 className="text-[2rem] font-bold tracking-widest mb-4">
        Operating System Functions
      </h3>
      <p className="tracking-wide ml-8 mb-8">
        <ul>
          <li>Memory and Processor Management</li>
          <li>Network Management</li>
          <li>Security Management</li>
          <li>File Management</li>
          <li>Error Detection</li>
          <li>Job Accounting</li>
        </ul>
      </p>

      <h3 className="text-[2rem] font-bold tracking-widest mb-4">
        Types of Operating System
      </h3>

      <ul className="tracking-wide ml-8 mb-8 ">
        <li>Batch OS (e.g. Transactions Process, Payroll System, etc.)</li>
        <li>Multi-programmed OS (e.g. Windows, UNIX, macOS, etc.)</li>
        <li>Timesharing OS (e.g. Multics, Linux, etc.)</li>
        <li>Real-Time OS (e.g. PSOS, VRTX, etc.)</li>
        <li>Distributed OS (e.g. LOCUS, Solaris, etc.)</li>
      </ul>

      <h3 className="text-[2rem] font-bold tracking-widest mb-4">1. Batch Operating System</h3>
      <p className="tracking-wide ml-8 mb-8">This type of operating system does not interact with the computer directly. There is an operator which takes similar jobs having the same requirements and groups them into batches. It is the responsibility of the operator to sort jobs with similar needs. Batch Operating System is designed to manage and execute a large number of jobs efficiently by processing them in groups.</p>

      <h3 className="text-[2rem] font-bold tracking-widest mb-4">2. Multi-Programming Operating System</h3>
      <p className="tracking-wide ml-8 mb-8">Multiprogramming Operating Systems can be simply illustrated as more than one program is present in the main memory and any one of them can be kept in execution. This is basically used for better utilization of resources.</p>

      <h3 className="text-[2rem] font-bold tracking-widest mb-4">3. Multi-Processing Operating System</h3>
      <p className="tracking-wide ml-8 mb-8">Multi-Processing Operating System is a type of Operating System in which more than one CPU is used for the execution of resources. It betters the throughput of the System.</p>

      <h3 className="text-[2rem] font-bold tracking-widest mb-4">4. Multi-Tasking Operating System</h3>
      <p className="tracking-wide ml-8 mb-8">Multitasking Operating System is simply a multiprogramming Operating System with having facility of a Round-Robin Scheduling Algorithm. It can run multiple programs simultaneously.</p>

      <h3 className="text-[2rem] font-bold tracking-widest mb-4">5. Time-Sharing Operating Systems</h3>
      <p className="tracking-wide ml-8 mb-8">Each task is given some time to execute so that all the tasks work smoothly. Each user gets the time of the CPU as they use a single system. These systems are also known as Multitasking Systems. The task can be from a single user or different users also. The time that each task gets to execute is called quantum. After this time interval is over OS switches over to the next task.</p>

      <h3 className="text-[2rem] font-bold tracking-widest mb-4">6. Distributed Operating System</h3>
      <p className="tracking-wide ml-8 mb-8">These types of operating system is a recent advancement in the world of computer technology and are being widely accepted all over the world and, that too, at a great pace. Various autonomous interconnected computers communicate with each other using a shared communication network. Independent systems possess their own memory unit and CPU. These are referred to as loosely coupled systems or distributed systems . These systems’ processors differ in size and function. The major benefit of working with these types of the operating system is that it is always possible that one user can access the files or software which are not actually present on his system but some other system connected within this network i.e., remote access is enabled within the devices connected in that network.</p>

      <h3 className="text-[2rem] font-bold tracking-widest mb-4">7. Network Operating System</h3>
      <p className="tracking-wide ml-8 mb-8">These systems run on a server and provide the capability to manage data, users, groups, security, applications, and other networking functions. These types of operating systems allow shared access to files, printers, security, applications, and other networking functions over a small private network. One more important aspect of Network Operating Systems is that all the users are well aware of the underlying configuration, of all other users within the network, their individual connections, etc. and that’s why these computers are popularly known as tightly coupled systems .</p>

      <h3 className="text-[2rem] font-bold tracking-widest mb-4">8. Real-Time Operating System</h3>
      <p className="tracking-wide ml-8 mb-8">These types of OSs serve real-time systems. The time interval required to process and respond to inputs is very small. This time interval is called response time. Real-time systems are used when there are time requirements that are very strict like missile systems, air traffic control systems, robots, etc.</p>

      <h3 className="text-[2rem] font-bold tracking-widest mb-4"></h3>
      <p className="tracking-wide ml-8 mb-8"></p>

      <h3 className="text-[2rem] font-bold tracking-widest mb-4"></h3>
      <p className="tracking-wide ml-8 mb-8"></p>

      <h3 className="text-[2rem] font-bold tracking-widest mb-4"></h3>
      <p className="tracking-wide ml-8 mb-8"></p>


    </div>

  );
};

export default OS;
