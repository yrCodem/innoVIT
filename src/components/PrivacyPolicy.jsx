const PrivacyPolicy = () => {
  return (
    // Remove <Layout> wrapper temporarily
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='min-h-screen bg-gray-50 pt-20'
    >
      <h1 className='text-4xl p-8'>Test Heading Without Layout</h1>
    </motion.div>
  )
}
