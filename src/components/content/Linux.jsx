import React from "react";

const Linux = () => {
  return (
    <div className="container">
      {/* Title */}
      <h3 className="text-[2rem] font-bold tracking-widest mb-4">
        Basic Linux Commands
      </h3>

      {/* Introduction paragraph */}


      <div className="tracking-wide ml-8 mb-8">
        <p>
          Linux is an open-source operating system kernel created by Linus
          Torvalds in 1991. Unlike proprietary systems like Windows or macOS,
          Linux is freely available for anyone to use, modify, and distribute.
          The term "Linux" often refers not just to the kernel, but to the
          entire operating system built around it, typically using various
          distributions (distros) such as Ubuntu, Fedora, and Debian.
        </p>
        <br />
        <p>
          The Linux kernel manages system resources, including memory,
          processes, and hardware interaction. It allows users to interact with
          the computer via a command-line interface (CLI) or graphical user
          interface (GUI), depending on the distribution.
        </p>
        <br />
        <p>
          One of Linux's biggest strengths is its security and stability, making
          it the preferred choice for servers, supercomputers, and embedded
          systems. It's widely used for web hosting, cloud services, and
          software development due to its efficiency and low cost.
        </p>
        <br />
        <p>
          Linux supports a vast range of applications, from simple text editors
          to complex enterprise-level software. With its flexibility, it allows
          developers to customize the system to their needs, making it ideal for
          various environments.
        </p>
        <br />
        <p>
          Overall, Linux empowers users with control over their systems and
          offers a community-driven, open environment where anyone can
          contribute to its growth and evolution.
        </p>
      </div>

      <p className="tracking-wide ml-8 mb-8">
        This document lists essential Linux commands with their descriptions and
        variations. These commands will help you with basic file management,
        system monitoring, and other tasks.
      </p>

      {/* pwd Command */}
      <h3 className="text-[2rem] font-bold tracking-widest mb-4">pwd</h3>
      <p className="tracking-wide ml-8 mb-4">
        Prints the current working directory. It shows the full path to the
        directory you are currently in.
      </p>

      {/* ls Command */}
      <h3 className="text-[2rem] font-bold tracking-widest mb-4">ls</h3>
      <p className="tracking-wide ml-8 mb-4">
        Lists the files and directories in the current directory.
      </p>
      <ul className="ml-8 list-disc space-y-2 mb-4">
        <li>
          <strong>ls -l</strong> - Lists files with detailed information like
          permissions, owner, size, and modification date.
        </li>
        <li>
          <strong>ls -a</strong> - Lists all files, including hidden files.
        </li>
        <li>
          <strong>ls -h</strong> - Shows file sizes in human-readable format
          (e.g., KB, MB).
        </li>
        <li>
          <strong>ls -R</strong> - Recursively lists all files in
          subdirectories.
        </li>
      </ul>

      {/* cd Command */}
      <h3 className="text-[2rem] font-bold tracking-widest mb-4">cd</h3>
      <p className="tracking-wide ml-8 mb-4">Changes the current directory.</p>
      <ul className="ml-8 list-disc space-y-2 mb-4">
        <li>
          <strong>cd ~</strong> - Takes you to your home directory.
        </li>
        <li>
          <strong>cd /</strong> - Takes you to the root directory.
        </li>
        <li>
          <strong>cd ..</strong> - Moves you one directory up.
        </li>
        <li>
          <strong>cd [dir]</strong> - Changes to the specified directory.
        </li>
        <li>
          <strong>cd -</strong> - Takes you to the previous directory you were
          in.
        </li>
      </ul>

      {/* mkdir Command */}
      <h3 className="text-[2rem] font-bold tracking-widest mb-4">mkdir</h3>
      <p className="tracking-wide ml-8 mb-4">Creates a new directory.</p>
      <ul className="ml-8 list-disc space-y-2 mb-4">
        <li>
          <strong>mkdir -p [dir]</strong> - Creates parent directories as
          needed.
        </li>
        <li>
          <strong>mkdir -v [dir]</strong> - Prints a message for each created
          directory.
        </li>
      </ul>

      {/* rm Command */}
      <h3 className="text-[2rem] font-bold tracking-widest mb-4">rm</h3>
      <p className="tracking-wide ml-8 mb-4">Removes files or directories.</p>
      <ul className="ml-8 list-disc space-y-2 mb-4">
        <li>
          <strong>rm -r [dir]</strong> - Removes a directory and its contents
          recursively.
        </li>
        <li>
          <strong>rm -f [file]</strong> - Forcefully removes a file without
          prompting for confirmation.
        </li>
        <li>
          <strong>rm -i [file]</strong> - Prompts for confirmation before
          removing the file.
        </li>
      </ul>

      {/* cp Command */}
      <h3 className="text-[2rem] font-bold tracking-widest mb-4">cp</h3>
      <p className="tracking-wide ml-8 mb-4">Copies files or directories.</p>
      <ul className="ml-8 list-disc space-y-2 mb-4">
        <li>
          <strong>cp [source] [destination]</strong> - Copies a file to the
          specified destination.
        </li>
        <li>
          <strong>cp -r [source] [destination]</strong> - Copies directories
          recursively.
        </li>
        <li>
          <strong>cp -u [source] [destination]</strong> - Copies files only if
          the source is newer than the destination.
        </li>
      </ul>

      {/* mv Command */}
      <h3 className="text-[2rem] font-bold tracking-widest mb-4">mv</h3>
      <p className="tracking-wide ml-8 mb-4">
        Moves or renames files or directories.
      </p>
      <ul className="ml-8 list-disc space-y-2 mb-4">
        <li>
          <strong>mv [source] [destination]</strong> - Moves or renames a file.
        </li>
        <li>
          <strong>mv [file] [directory]</strong> - Moves the file into the
          specified directory.
        </li>
        <li>
          <strong>mv -i [source] [destination]</strong> - Prompts for
          confirmation before overwriting a file.
        </li>
      </ul>

      {/* echo Command */}
      <h3 className="text-[2rem] font-bold tracking-widest mb-4">echo</h3>
      <p className="tracking-wide ml-8 mb-4">
        Displays a line of text or outputs to a file.
      </p>
      <ul className="ml-8 list-disc space-y-2 mb-4">
        <li>
          <strong>echo [text]</strong> - Prints the specified text to the
          terminal.
        </li>
        <li>
          <strong>echo [text] {">"} [file]</strong> - Writes the text to a file
          (overwrites if the file exists).
        </li>
        <li>
          <strong>echo [text] {">>"} [file]</strong> - Appends the text to a
          file.
        </li>
        <li>
          <strong>echo $[variable]</strong> - Displays the value of a variable.
        </li>
      </ul>

      {/* man Command */}
      <h3 className="text-[2rem] font-bold tracking-widest mb-4">man</h3>
      <p className="tracking-wide ml-8 mb-4">
        Displays the manual for a command.
      </p>
      <ul className="ml-8 list-disc space-y-2 mb-4">
        <li>
          <strong>man [command]</strong> - Shows the manual page for the
          specified command.
        </li>
        <li>
          <strong>man -k [keyword]</strong> - Searches for a keyword in the
          manual pages.
        </li>
        <li>
          <strong>man [command] | less</strong> - Allows you to scroll through
          the man page.
        </li>
      </ul>

      {/* chmod Command */}
      <h3 className="text-[2rem] font-bold tracking-widest mb-4">chmod</h3>
      <p className="tracking-wide ml-8 mb-4">
        Changes the permissions of a file or directory.
      </p>
      <ul className="ml-8 list-disc space-y-2 mb-4">
        <li>
          <strong>chmod [permissions] [file]</strong> - Changes the permissions
          of a file.
        </li>
        <li>
          <strong>chmod 755 [file]</strong> - Sets the permissions to read,
          write, and execute for the owner, and read and execute for others.
        </li>
        <li>
          <strong>chmod +x [file]</strong> - Adds execute permissions to a file.
        </li>
      </ul>

      {/* chown Command */}
      <h3 className="text-[2rem] font-bold tracking-widest mb-4">chown</h3>
      <p className="tracking-wide ml-8 mb-4">
        Changes the owner of a file or directory.
      </p>
      <ul className="ml-8 list-disc space-y-2 mb-4">
        <li>
          <strong>chown [user] [file]</strong> - Changes the owner of the file
          to the specified user.
        </li>
        <li>
          <strong>chown [user]:[group] [file]</strong> - Changes both the owner
          and the group of the file.
        </li>
      </ul>

      {/* df Command */}
      <h3 className="text-[2rem] font-bold tracking-widest mb-4">df</h3>
      <p className="tracking-wide ml-8 mb-4">Displays disk space usage.</p>
      <ul className="ml-8 list-disc space-y-2 mb-4">
        <li>
          <strong>df -h</strong> - Displays disk space in a human-readable
          format (e.g., MB, GB).
        </li>
        <li>
          <strong>df -T</strong> - Displays the type of file system.
        </li>
      </ul>
    </div>
  );
};

export default Linux;
